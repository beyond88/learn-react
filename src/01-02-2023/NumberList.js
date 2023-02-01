
function ListItem(props) {
    return <li>{props.value}</li>
}


export default function NumberList(props){
    const numbers = props.numbers;

    if(numbers.length < 0){
        return null;
    }

    const listItems = numbers.map((number) => 
       <ListItem key={ number.toString() } value={number}/>
    );

    return <ul>{listItems}</ul>
}

