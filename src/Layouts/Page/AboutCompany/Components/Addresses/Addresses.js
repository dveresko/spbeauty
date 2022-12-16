
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex justify-content-between flex-column  p-4 me-5 ms-5 col myborder'>
            <div className='d-inline-flex flex-column  gap-4'>
                <div className='title'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                {/* <div className='col'></div>  */}
            </div>

            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;