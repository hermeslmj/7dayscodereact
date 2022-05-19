import { Menu } from '../components/Menu';
import { NewsLetter } from '../components/NewsLetter';

function Page() {
    const items = [
        "Item 1",
        "Item 2",
        "Item 3"
    ];
    return ( 
        <div>
            <Menu items={items} />
            <NewsLetter />
        </div>
     );
}

export { Page } ;