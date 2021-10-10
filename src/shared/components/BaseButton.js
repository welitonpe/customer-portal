import { Button } from "@clayui/core";
import ClayIcon from '@clayui/icon';

const BaseButton = ({ children, icon, ...props }) => {
    return (
        <Button {...props}>
            {icon && <span className="inline-item inline-item-before">
                <ClayIcon symbol={icon} />
            </span>}
            {children}
        </Button>
    );
}

export default BaseButton;