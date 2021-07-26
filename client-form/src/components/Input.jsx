export function Input(props){
    return(
        <input 
        id={props.id}
        type={props.type} 
        value={props.value}
        maxLength={props.maxLength}
        onChange={(e) => props.onChange(e)}
        autoComplete='off'
        />
    )
}