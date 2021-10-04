import { ClayInput } from "@clayui/form";
import { useField } from "formik";

const Input = ({ label, helper, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>
                {label}
                <ClayInput {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="text-content ml-3 mt-1">
                {helper}
            </div>)}
        </>
    );
};

export default Input;