SELECT Room ID
FROM Seat
WHERE count(Room ID)=max(count(Room ID))
FOR JSON PATH, ROOT(‘Classroom’);
