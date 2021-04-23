-- Create 'records' table
CREATE TABLE IF NOT EXISTS tasks (
  task_id SERIAL PRIMARY KEY,
  task_name VARCHAR(128) NOT NULL,
  resource TEXT,
  start_date DATE NOT NULL,  
  end_date DATE NOT NULL,
  duration INTEGER,
  percent_complete INTEGER NOT NULL,
  dependencies INTEGER ARRAY  
  CHECK (end_date >= start_date)
);

-- INSERT sample data for testing
INSERT INTO tasks (task_name, resource, start_date, end_date, duration, percent_complete, dependencies)
VALUES 
  ('Find sources', null, '2021-04-01', '2021-04-05', null, 100, null),
  ('Outline paper', null, '2021-04-06', '2021-04-08', null, 100, null),
  ('Create biliography', null, '2021-04-09', '2021-04-10', null, 100, null),
  ('Write paper', null, '2021-04-11', '2021-04-30', null, 25, null),
  ('Hand in paper', null, '2021-05-11', '2021-05-12', null, 0, null)
  ;

-- Create archives table
CREATE TABLE archives (
  task_id INTEGER NOT NULL,
  task_name VARCHAR(128) NOT NULL,
  resource TEXT,
  start_date DATE NOT NULL ,
  end_date DATE NOT NULL,
  completed_date DATE NOT NULL
);
