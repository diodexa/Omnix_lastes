
export const Note =()=>{
    const dataNote = [
{ 
    id: crypto.randomUUID(),
    title: `ini Note 1`,
    content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut provident quod, natus nostrum quis.`,
    createdAt : `${new Date().toLocaleDateString("id-ID")}`
},
{ 
    id: crypto.randomUUID(),
    title: `ini Note 2`,
    content : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis voluptatum nihil corporis odit incidunt consequatur voluptate aliquam totam eligendi.`,
    createdAt : `${new Date().toLocaleDateString("id-ID")}`
}

]
return dataNote
};
