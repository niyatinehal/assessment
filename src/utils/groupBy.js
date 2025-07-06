//groupby function that resonates or behaves like reduce function of javascript. 

Object.defineProperty(Array.prototype,'groupBy',{
    value:function(keySelector){
       
        // if(!Array.isArray(this)||this.length===0) return {};
        return this.reduce((grouped,item)=>{
            //null check

            const key=item==null ?"null": keySelector(item);
            const stringKey=String(key);
            if(!Array.isArray(grouped[stringKey])){
                grouped[stringKey]=[]
            }
            grouped[key]?.push(item);
            return grouped;
        },[])
    },
    enumerable:false
})

