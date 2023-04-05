import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import classNames from "classnames";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Map = ({
	user,
	className,
}: {
	user: "vendor" | "customer" | "driver";
	className?: string;
}) => {
	const [vendorLocation, setVendorLocation] = useState({
		latitude: 49.2598538,
		longitude: -123.0484587,
	});
	const [customerLocation, setCustomerLocation] = useState({
		latitude: 49.2648015,
		longitude: -123.0700499,
	});
	const [driverLocation, setDriverLocation] = useState({
		latitude: 49.2648015,
		longitude: -123.0700499,
	});

	const [viewport, setViewport] = useState({
		latitude: null as number | null,
		longitude: null as number | null,
		zoom: null,
	});

	useEffect(() => {
		if (user === "vendor") {
			getCurrentHook().then((location) => {
				setVendorLocation(location);
				setViewport({
					...viewport,
					latitude: location.latitude || null,
					longitude: location.longitude,
				});
			});
		} else if (user === "customer") {
			getCurrentHook().then((location) => {
				setCustomerLocation(location);
				setViewport({
					...viewport,
					latitude: location.latitude,
					longitude: location.longitude,
				});
			});
		} else if (user === "driver") {
			getCurrentHook().then((location) => {
				setDriverLocation(location);
				setViewport({
					...viewport,
					latitude: location.latitude,
					longitude: location.longitude,
				});
			});
		}
	}, [user]);

	interface Coordinates {
		latitude: number;
		longitude: number;
	}

	function getCurrentHook(): Promise<Coordinates> {
		return new Promise((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const coordinates: Coordinates = {
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						};
						resolve(coordinates);
					},
					(error) => {
						reject(error);
					}
				);
			} else {
				reject(new Error("Geolocation API not available"));
			}
		});
	}

	const handleViewportChange = (v: any) => {
		setViewport(v);
	};

	return (
		<div className={classNames("relative", className)}>
			<ReactMapGL
				{...viewport}
				// {...settings}
				zoom={13}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ""}
				mapStyle="mapbox://styles/mapbox/dark-v11"
				style={{ width: "100vw", height: "100%" }}
				onDrag={handleViewportChange}
				onZoomStart={handleViewportChange}
				onZoomEnd={handleViewportChange}
				onWheel={handleViewportChange}
			>
				<Marker
					latitude={vendorLocation.latitude}
					longitude={vendorLocation.longitude}
				>
					<h3 className="bg-white rounded-full flex items-center justify-center h-10 w-10 ">
						<span role="img" aria-label="vendor">
							🧑
						</span>
					</h3>
				</Marker>
				<Marker
					latitude={customerLocation.latitude}
					longitude={customerLocation.longitude}
				>
					<h3 className="bg-white rounded-full flex items-center justify-center h-10 w-10 animate-bounce">
						<span role="img" aria-label="customer">
							🧍
						</span>
					</h3>
				</Marker>

				<Marker
					latitude={driverLocation.latitude}
					longitude={driverLocation.longitude}
				>
					<h3 className="bg-white rounded-full flex items-center justify-center h-10 w-10">
						<span role="img" aria-label="driver">
							🚗
						</span>
					</h3>
				</Marker>
			</ReactMapGL>
		</div>
	);
};

export default Map;
