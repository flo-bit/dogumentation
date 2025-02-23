import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
<div className="flex items-center justify-center gap-2">
	<button 
		className="block bg-red-500/10 px-2 py-1 rounded-md text-red-400" 
		onClick={decrement}>
		-
	</button>
	<span>Count: {count}</span>
	<button 
		className="inline-flex bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md" 
		onClick={increment}>
		+
	</button>
</div>
	);
}
