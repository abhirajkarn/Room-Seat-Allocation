SELECT S.ID
      ,S.Room ID
FROM Seat S, Student ST
WHERE ST.ID = S.ID
      AND ST.ID = ‘XX’
      AND ST.Name = ‘Student1’
      AND S.Created at = ‘11/19/2022’
      AND S.Created at = ‘12/19/2022’;
