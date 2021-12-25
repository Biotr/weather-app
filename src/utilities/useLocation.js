
import Geocode from "react-geocode";


export const userLocation = () => {

    navigator.geolocation.getCurrentPosition((position) => {
        Geocode.setApiKey("AIzaSyBJ7fhqNeSGZHPu7RPmjeDl5tLelMjEEss");
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then((response) => {
            response.results[0].address_components.forEach((address_component) => {
                address_component.types.forEach(type => {
                    if (type === "locality") {
                        // {
                        //     city: address_component.long_name,
                        //         lat: position.coords.latitude,
                        //             lng: position.coords.longitude
                        // }
                    }
                })
            })
        }, (error) => {
            console.error(error);
        }
        );
    })

}

