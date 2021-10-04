const SquareRadioGroup = ({ items, name, onChange, checked }) => {
    const isSelected = (item, checkedItem) => {
        return checkedItem && item.id === checkedItem.id;
    };

    return (
        <div className="d-flex flex-column">
            {items.map((item, index) => <label key={index} className={`d-flex align-items-center position-relative square-radio border ${isSelected(item, checked) ? "border-primary selected shadow-sm" : "border-light"} rounded`}>
                <input
                    defaultChecked={isSelected(item, checked)}
                    type="radio"
                    value={item.name}
                    name={name}
                    onChange={() => onChange(item)}
                    className="d-none"
                />
                <div>
                    <img
                        alt="Item's Icon"
                        className="mr-2"
                        draggable={false}
                        height={32}
                        src={item.icon}
                        width={32}
                    />
                    {item.name}
                </div>
            </label>)}
        </div>
    );
};

export default SquareRadioGroup;
