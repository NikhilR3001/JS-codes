function classnames(...args) {
    let result = [];

    args.forEach(arg => {
        if (!arg) return;
        if (typeof arg === "string") {
            result.push(arg);
        } else if (Array.isArray(arg)) {
            result.push(classnames(...arg));
        } else if (typeof arg === "object") {
            for (let key in arg) {
                if (arg[key]) result.push(key);
            }
        }
    });

    return result.join(" ");
}

// Example: Adding dynamic classes


/*const button = document.getElementById("myButton");

const isPrimary = true;
const isDisabled = false;

button.className = classnames("btn", { primary: isPrimary, disabled: isDisabled });*/