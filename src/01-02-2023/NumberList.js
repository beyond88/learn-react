
export default function NumberList(props){
    const numbers = props.numbers;

    if(numbers.length < 0){
        return null;
    }

    const listItems = numbers.map((number) => 
        <li key={number.id}>{number}</li>
    );

    return <ul>{listItems}</ul>
}

