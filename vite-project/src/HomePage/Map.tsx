import { useEffect, useRef, useState } from "react";
import { Navigation, Share2 } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

// Type definitions
interface Location {
  lat: number;
  lng: number;
}

interface MapRefs {
  map: L.Map | null;
  mapContainer: HTMLDivElement | null;
  routingControl: any; // Using any for leaflet-routing-machine
}

const VENUE_LOCATION: Location = { lat: 24.900242, lng: 74.299539 };

export default function Map(): React.JSX.Element {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const mapRefs = useRef<MapRefs>({
    map: null,
    mapContainer: null,
    routingControl: null,
  });

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (err: GeolocationPositionError) => {
          setError("Please enable location services to get directions");
          console.log(err.message);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!mapRefs.current.mapContainer) return;

    // Initialize map
    if (!mapRefs.current.map) {
      mapRefs.current.map = L.map(mapRefs.current.mapContainer, {
        zoomControl: false, // Move zoom control to better position for mobile
        attributionControl: false, // Hide attribution for cleaner mobile view
      }).setView([VENUE_LOCATION.lat, VENUE_LOCATION.lng], 13);

      // Add zoom control to top-right for better mobile access
      L.control
        .zoom({
          position: "topright",
        })
        .addTo(mapRefs.current.map);

      // Add attribution in a better position
      L.control
        .attribution({
          position: "bottomright",
          prefix: false,
        })
        .addAttribution(
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        )
        .addTo(mapRefs.current.map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRefs.current.map
      );

      // Custom venue icon
      // const venueIcon = L.divIcon({
      //   html: `<div class="venue-marker">
      //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-8 h-8">
      //             <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      //             <circle cx="12" cy="10" r="3"></circle>
      //           </svg>
      //           <div class="pulse"></div>
      //         </div>`,
      //   className: "",
      //   iconSize: [40, 40],
      //   iconAnchor: [20, 40],
      // });

      // Add venue marker
      // const venueMarker = L.marker([VENUE_LOCATION.lat, VENUE_LOCATION.lng], {
      //   icon: venueIcon,
      // }).addTo(mapRefs.current.map);
    }

    // Add user location and routing if available
    if (userLocation && mapRefs.current.map) {
      const userIcon = L.divIcon({
        html: `<div class="user-marker">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>`,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      L.marker([userLocation.lat, userLocation.lng], {
        icon: userIcon,
      }).addTo(mapRefs.current.map);

      // Add routing
      try {
        // Type assertion for leaflet-routing-machine
        const routingControl = (L as any).Routing.control({
          waypoints: [
            L.latLng(userLocation.lat, userLocation.lng),
            L.latLng(VENUE_LOCATION.lat, VENUE_LOCATION.lng),
          ],
          routeWhileDragging: false,
          showAlternatives: false,
          lineOptions: {
            styles: [{ color: "#e11d48", opacity: 0.7, weight: 5 }],
          },
          router: (L as any).Routing.osrmv1({
            serviceUrl: "https://router.project-osrm.org/route/v1",
          }),
          collapsible: true, // Allow collapsing on mobile
          fitSelectedRoutes: true,
          show: false, // Start with collapsed view on mobile
          createMarker: () => null, // Don't create additional markers
          addWaypoints: false, // Prevent adding waypoints
          draggableWaypoints: false, // Prevent dragging waypoints
        }).addTo(mapRefs.current.map);

        mapRefs.current.routingControl = routingControl; // Store the routing control

        // Hide the routing container initially on mobile
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          const container = routingControl.getContainer();
          L.DomUtil.addClass(container, "leaflet-routing-container-hide");

          // Add a button to toggle directions
          const toggleBtn = L.Control.extend({
            onAdd: () => {
              const div = L.DomUtil.create(
                "div",
                "leaflet-bar leaflet-control"
              );
              div.innerHTML =
                '<a href="#" title="Toggle Directions" style="font-weight: bold; font-size: 16px;">📍</a>';
              div.onclick = () => {
                if (
                  L.DomUtil.hasClass(
                    container,
                    "leaflet-routing-container-hide"
                  )
                ) {
                  L.DomUtil.removeClass(
                    container,
                    "leaflet-routing-container-hide"
                  );
                } else {
                  L.DomUtil.addClass(
                    container,
                    "leaflet-routing-container-hide"
                  );
                }
                return false;
              };
              return div;
            },
          });
          new toggleBtn({ position: "bottomright" }).addTo(
            mapRefs.current.map!
          );
        }
      } catch (error) {
        console.error("Routing error:", error);
      }
    }

    return () => {
      if (mapRefs.current.map) {
        mapRefs.current.map.remove();
        mapRefs.current.map = null;
      }
    };
  }, [userLocation]); // Removed routingVisible from the dependency array

  const openGoogleMaps = (): void => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${VENUE_LOCATION.lat},${VENUE_LOCATION.lng}`,
      "_blank"
    );
  };

  const openAppleMaps = (): void => {
    window.open(
      `https://maps.apple.com/?daddr=${VENUE_LOCATION.lat},${VENUE_LOCATION.lng}`,
      "_blank"
    );
  };

  const shareLocation = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Wedding Venue Location",
          text: `Join us at Raghav & Anjali's Wedding! Here's the location.`,
          url: `https://www.google.com/maps/search/?api=1&query=${VENUE_LOCATION.lat},${VENUE_LOCATION.lng}`,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(
        `https://www.google.com/maps/search/?api=1&query=${VENUE_LOCATION.lat},${VENUE_LOCATION.lng}`
      );
      alert("Location link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-[#1B3B36] overflow-x-hidden">
      {/* Map Section */}
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Responsive map height */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-80 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-rose-500 mx-auto"></div>
                  <p className="mt-2 text-gray-600 text-sm">
                    Getting your location...
                  </p>
                </div>
              </div>
            )}
            <div
              ref={(el) => {
                mapRefs.current.mapContainer = el;
              }}
              className="h-full w-full"
            />
          </div>

          {/* Navigation Options - Better touch targets */}
          <div className="p-4 sm:p-6 bg-rose-50">
            {error && (
              <div className="mb-4 p-3 bg-[#D4AF37]/30 rounded-lg text-center">
                <p className="text-[#1B3B36] text-sm">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <button
                onClick={openGoogleMaps}
                className="bg-[#D4AF37] hover:bg-rose-600 active:bg-rose-700 text-white py-3.5 px-4 rounded-xl flex items-center justify-center transition-colors shadow-sm touch-manipulation"
              >
                <Navigation className="mr-2 flex-shrink-0" size={18} />
                <span className="font-medium">Open in Google Maps</span>
              </button>

              <button
                onClick={openAppleMaps}
                className="bg-[#D4AF37] hover:bg-gray-900 active:bg-black text-white py-3.5 px-4 rounded-xl flex items-center justify-center transition-colors shadow-sm touch-manipulation"
              >
                <Navigation className="mr-2 flex-shrink-0" size={18} />
                <span className="font-medium">Open in Apple Maps</span>
              </button>

              <button
                onClick={shareLocation}
                className="bg-white border border-rose-300 text-[#1B3B36] hover:bg-rose-50 active:bg-rose-100 py-3.5 px-4 rounded-xl flex items-center justify-center transition-colors shadow-sm touch-manipulation"
              >
                <Share2 className="mr-2 flex-shrink-0" size={18} />
                <span className="font-medium">Share Location</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Better touch handling */
        * {
          touch-action: manipulation;
        }

        /* Venue marker with improved animation */
        .venue-marker {
          position: relative;
        }
        .venue-marker .pulse {
          position: absolute;
          top: 20px;
          left: 20px;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: rgba(225, 29, 72, 0.3);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        /* Mobile-optimized map controls */
        .leaflet-touch .leaflet-control-layers,
        .leaflet-touch .leaflet-bar {
          border: none;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        }

        .leaflet-touch .leaflet-bar a {
          width: 36px;
          height: 36px;
          line-height: 36px;
        }

        /* Mobile-friendly routing container */
        .leaflet-routing-container {
          background: white;
          padding: 0.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
          font-size: 0.75rem;
          position: absolute;
          bottom: 10px;
          right: 10px;
          max-width: 200px;
          max-height: 150px;
          overflow: auto;
          z-index: 1000;
          opacity: 0.9;
        }

        .leaflet-routing-container-hide {
          display: none;
        }

        .leaflet-routing-alt {
          max-height: 100px;
          overflow-y: auto;
          border-bottom: 1px solid #ddd;
          padding-right: 10px;
        }

        .leaflet-routing-collapse-btn {
          position: relative;
          display: block;
          width: 100%;
          text-align: center;
          background: #f8f9fa;
          padding: 4px 0;
          margin-top: 5px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
        }

        /* Animations */
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        .animate-fade-in-1 {
          animation: fade-in 1.5s ease-out;
        }

        .animate-fade-in-2 {
          animation: fade-in 1.5s ease-out 0.5s both;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Wedding-themed animations */
        @keyframes bell-swing {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        .animate-bell-swing {
          animation: bell-swing 3s ease-in-out infinite;
          transform-origin: top center;
        }

        @keyframes rings-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-rings-float {
          animation: rings-float 4s ease-in-out infinite;
        }

        @keyframes ring-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .animate-ring-pulse {
          animation: ring-pulse 2s ease-in-out infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        /* Improve popup readability on mobile */
        .leaflet-popup-content {
          margin: 10px 12px;
          font-size: 14px;
          line-height: 1.4;
        }

        /* Fix for iOS Safari 100vh issue */
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
        `,
        }}
      />
    </main>
  );
}
