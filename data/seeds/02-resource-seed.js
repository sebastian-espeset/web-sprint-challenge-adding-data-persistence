exports.seed = function(knex){
    return knex('resources').truncate()
        .then(()=>{
            return knex('resources').insert([
                {resource_name:"Youtube",resource_description:"a gret source"}
            ])
        })
}