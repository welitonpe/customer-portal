import { ClayInput } from "@clayui/form";
import { useField } from "formik";

const Input = ({ label, helper, ...props }) => {
    const [field, meta] = useField(props);

    const getContent = () => {
        if (meta.touched && meta.error) {
            return (
                <div className="error">{meta.error}</div>
            );
        } else if (helper) {
            return (
                <div className="text-content ml-3 mt-1">
                    {helper}
                </div>
            );
        }
    };

    return (
        <>
            <label className="input mb-0">
                {label}
                <ClayInput {...field} {...props} />
            </label>
            { getContent() }
        </>
    );
};

export default Input;