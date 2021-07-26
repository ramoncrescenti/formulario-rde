export function TextArea(props){
    return(
        <textarea
          cols="44"
          rows="11"
          maxLength="300"
          value={props.value}
          onChange={(e) => props.onChange(e)}
        />
    )
}