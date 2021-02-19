exports.seed = function(knex){
    return knex('tasks').truncate()
        .then(()=>{
            return knex('tasks').insert([
                {task_description:"gotta find a good vid on pixleart",task_notes:"don't give up!",task_completed:false, project_id:1}
            ])
        })
}