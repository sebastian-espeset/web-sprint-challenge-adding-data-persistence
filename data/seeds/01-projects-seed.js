exports.seed = function(knex){
    return knex('projects').truncate()
        .then(()=>{
            return knex('projects').insert([
                {project_name:"learn pixle art",project_description:"tricky but there are tricks",project_completed:false}
            ])
        })
}