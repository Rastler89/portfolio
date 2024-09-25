const Tecnologies = (props: { data: { name: string;} }) => {
    const { name} = props.data;

    return (
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset`}>
            {name}
        </span>
        
    )
}

export default Tecnologies;