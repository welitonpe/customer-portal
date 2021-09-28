const RadioButtons = ({ items, onClick, checked }) => {
  const chek = () => {
    return checked;
  };
  return (
    <div className=" d-flex flex-column justify-content-start ">
      {items.map((item, index) => {
        return (
          <div className="form-check btnBody mb-4" key={index}>
            <label>
              <input
                defaultChecked={item.id === 1 ? true : false}
                id={item.id}
                key={index}
                name="radio Button"
                onClick={() => onClick(item)}
                type="radio"
                value={`option${index}`}
              />
              <div className="roleButtons"></div>
              <img
                alt="Costumer Service Intro"
                className="mr-2 ml-3"
                draggable={false}
                height={32}
                src={item.icon}
                width={32}
              />
              {item.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
