-- Create 'records' table
CREATE TABLE IF NOT EXISTS tasks (
  task_id SERIAL PRIMARY KEY,
  task_name VARCHAR(128) NOT NULL,
  resource VARCHAR(512),
  start_date DATE NOT NULL,  
  end_date DATE NOT NULL,
  duration INTEGER NOT NULL,
  percent_complete INTEGER NOT NULL,
  dependencies INTEGER ARRAY
);

-- INSERT sample data for testing
INSERT INTO tasks (task_name, resource, start_date, end_date, duration, percent_complete, dependencies)
VALUES 
  ('Find sources', null, '2015-01-01', '2015-01-05', 4, 100, null),
  ('Write paper', null, '2015-01-06', '2015-01-09', 3, 25, null),
  ('Create biliography', null, '2015-01-07', '2015-01-08', 1, 20, null),
  ('Hand in paper', null, '2015-01-09', '2015-01-10', 1, 0, null),
  ('Outline paper', null, '2015-01-05', '2015-01-06', 1, 100, null)
  ;

-- Add constraint to tasks table
ALTER TABLE tasks
ADD CHECK (end_date >= start_date);


