import './Select.css';

export function Select(props){
    return (
        <select 
        onChange={(e) => props.onChange(e)}>
            {
                props.options.map((opt) => {
                    return (
                        <option value={opt.value} key={opt.value}>{opt.label}</option>
                    )
                })                
            }
        </select>
    )     
}