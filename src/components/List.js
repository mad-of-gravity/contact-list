import ListItem from './ListItem';

const List = (props) => {
    const array = props.items;
    let currentKey = Date.now();

    const listItems = array.map((item) => {
        currentKey++;
        console.log(currentKey);

        return (
            <ListItem key={currentKey} item={item}/>
        );
    });

    return (
        <div className='contacts-container'>
            <h2 className='title w3-purple'>Contacts</h2>
            <div className='contacts'>
                <ul className='w3-ul'>
                    {listItems}
                </ul>
            </div>
        </div>
    );
}

export default List;