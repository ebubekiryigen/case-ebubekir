const Input = ({value,onChange,placeholder,type,max, name,onBlur, onKeyPress}) =>{
    return(
        <input onBlur={onBlur} onKeyPress={onKeyPress} type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} max={max} ></input>
    )
}

export default Input