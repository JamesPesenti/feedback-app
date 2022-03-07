import { useState } from "react";
import { motion } from "framer-motion";
import React from 'react'
import Card from "./shared/Card";
import Button from "./shared/Button";

function NameForm() {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value)
    };

  return (
    <Card>
    <motion.div 
    animate={{ scale: .8 }}
    transition={{ duration: 1 }}
    >
        <form>
            <h2>Where are you going? </h2>
            {/* input-group reusable text input form */}
            <div className="input-group"> 
                <input 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder="See the world"
                    value={text}
                />
                <Button type="submit"  onClick={handleTextChange}>
                    Search
                </Button>
            
            </div>
        </form>
        </motion.div>
    </Card>
  )
}

export default NameForm