import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'
import { TextField, InputAdornment } from '@mui/material';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CircularProgress from '@mui/material/CircularProgress';

export const CityForm = ({ handleSelect }) => {
    const [value, setValue] = useState('')



    return (
        <PlacesAutocomplete value={value} highlightFirstSuggestion={true} onChange={setValue} onSelect={handleSelect} searchOptions={{ types: ['(cities)'] }} shouldFetchSuggestions={value.length > 1}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className={'suggestions'}>
                    <TextField InputProps={{ ...getInputProps({ placeholder: "Type City" }), startAdornment: <InputAdornment position="start">{loading ? <CircularProgress/> :<LocationSearchingIcon />}</InputAdornment>, className: 'input' }} />
                    <div className={'suggestions__list'}>
                    {suggestions.map((suggestion, id) => {

                        const style = {
                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                            color: 'black'
                        }
                        return <div key={id} className={"suggestion"} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                    })}
                    </div>
                </div>
                
            )}
        </PlacesAutocomplete>


    )
}
