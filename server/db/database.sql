-- Create 'records' table
CREATE TABLE IF NOT EXISTS records (
  task_id VARCHAR(8) NOT NULL,
  task_name VARCHAR(128) NOT NULL,
  start_date DATE,
  end_date DATE NOT NULL,
  duration INTEGER,
  percent_complete FLOAT,
  dependencies VARCHAR(8) ARRAY,
  PRIMARY KEY (task_id)
);

-- INSERT sample data for testing
INSERT INTO records 
VALUES 
  ('Proj0001', 'Find sources', '2015-01-01', '2015-01-05', null, 100, null),
  ('Proj0002', 'Write paper',null, '2015-01-09', 3, 25, ARRAY['Proj0001']),
  ('Proj0003', 'Create biliography', null, '2015-01-07', 1, 20, ARRAY['Proj0002']),
  ('Proj0004', 'Hand in paper', null, '2015-01-10', 1, 0, ARRAY['Proj0002', 'Proj0003']),
  ('Proj0005', 'Outline paper', null, '2015-01-06', 1, 100, ARRAY['Proj0001'])
  ;

  


