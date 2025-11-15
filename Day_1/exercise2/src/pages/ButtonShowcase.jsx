import React from "react";
import Button from "../components/Button";


export default function ButtonShowcase() {
return (
<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-10">
<h1 className="text-3xl font-bold mb-6">Button Component Library</h1>


<div className="grid grid-cols-2 gap-6 w-full max-w-xl">
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="danger">Danger Button</Button>
<Button variant="success">Success Button</Button>
<Button size="large" variant="primary">Large Button</Button>
<Button size="small" variant="primary">Small Button</Button>
</div>
</div>
);
}