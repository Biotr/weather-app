import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'



export const CityForm = ({ handleSelect }) => {
    const [value, setValue] = useState('')



    return (
        <div><PlacesAutocomplete value={value} highlightFirstSuggestion={true} onChange={setValue} onSelect={handleSelect} searchOptions={{ types: ['(cities)'] }} shouldFetchSuggestions={value.length > 1}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input {...getInputProps({ placeholder: "Type City" })} />
                    <div>

                        {loading ? <div>...loading</div> : null}
                        {suggestions.map((suggestion, id) => {

                            const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                            }
                            return <div key={id} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
        </div>

    )
}
