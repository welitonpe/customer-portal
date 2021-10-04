import { ClaySelect } from "@clayui/form";
import { useField } from "formik";

const Select = ({ label, options, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>
                {label}
                <ClaySelect {...field} {...props}>
                    {options.map((option) => (
                        <ClaySelect.Option
                            key={option.id}
                            label={option.name}
                            value={option.id}
                        />
                    ))}
                </ClaySelect>
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export default Select;