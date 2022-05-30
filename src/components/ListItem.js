const ListItem = (props) => {
    const item = props.item;

    return (
        <li>
            <h2>{item.name}</h2>
            <p>{item.number}</p>
        </li>
    );
}

export default ListItem;
