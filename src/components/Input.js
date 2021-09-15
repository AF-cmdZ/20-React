function Input({handler}) {
    const handleChange = (event) => {
        // Notify the parent component of this change so the state can update
        handler(event.target.value);
    };
    
    return (
    <div>
        <label htmlFor="name" className="sr-only">Enter a Name</label>
        <input 
            id="name" 
            type="text" 
            placeholder="Enter a Name" 
            className="border-2 border-blue-300 my-4 rounded-sm"
            onChange={handleChange}
        />
    </div>
    );
}

export default Input;