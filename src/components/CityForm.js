import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'
import { TextField, InputAdornment } from '@mui/material';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';


export const CityForm = ({ handleSelect }) => {
    const [value, setValue] = useState('')



    return (
        <PlacesAutocomplete value={value} highlightFirstSuggestion={true} onChange={setValue} onSelect={handleSelect} searchOptions={{ types: ['(cities)'] }} shouldFetchSuggestions={value.length > 1}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <>
                    <TextField InputProps={{ ...getInputProps({ placeholder: "Type City" }), startAdornment: <InputAdornment position="start"><LocationSearchingIcon /></InputAdornment>, className: 'input' }} />


                    {loading ? <div>...loading</div> : null}
                    {suggestions.map((suggestion, id) => {

                        const style = {
                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                            color: 'black'
                        }
                        return <div key={id} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                    })}

                </>
            )}
        </PlacesAutocomplete>


    )
}
