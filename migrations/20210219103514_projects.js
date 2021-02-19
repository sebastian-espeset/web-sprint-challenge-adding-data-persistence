
exports.up = function(knex) {
  return knex.schema
    .createTable("projects",table=>{
        table.increments("project_id")
        table.string("project_name").unique().notNullable()
        table.string("project_description")
        table.boolean("project_completed").notNullable()
    })
    .createTable("resources",table=>{
        table.increments("resource_id")
        table.string("resource_name").notNullable()
        table.string("resource_description")
    })
    .createTable("tasks",table=>{
        table.increments("task_id")
        table.string("task_description").notNullable()
        table.string("task_notes")
        table.boolean("task_completed").notNullable()
        table.integer("project_id")
            .unSigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("RESTRICT")
    })
    .createTable("resource_assignment",table=>{
        table.increments("recource_assignment_id")
        table.integer("project_id")
            .unSigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("RESTRICT")
        table.integer("resource_id")
            .unSigned()
            .notNullable()
            .references("resource_id")
            .inTable("resources")
            .onDelete("RESTRICT")
    })

};

exports.down = function(knex) {
  return knex.schema   
    .dropIfTableExists("resource_assignment")
    .dropIfTableExists("tasks")
    .dropIfTableExists("resources")
    .dropIfTableExists("projects")
};
