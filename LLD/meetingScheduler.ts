type TimeSlot = {
    start: number;
    end: number;
  };
  
  type Meeting = {
    title: string;
    timeSlot: TimeSlot;
    participants: string[]; // Assuming participant emails for simplicity
  };
  
  type MeetingRoom = {
    id: number;
    name: string;
    schedule: TimeSlot[];
  };
  
  class MeetingScheduler {
    meetingRooms: MeetingRoom[];
  
    constructor() {
      // Initialize meeting rooms with default schedules
      this.meetingRooms = [
        {
          id: 1,
          name: 'Meeting Room 1',
          schedule: [
            { start: 9, end: 10 },
            { start: 11, end: 12 },
            { start: 13, end: 14 },
            { start: 15, end: 16 },
          ],
        },
        // Add more meeting rooms as needed
      ];
    }
  
    scheduleMeeting(meeting: Meeting, roomId: number): boolean {
      const room = this.meetingRooms.find((r) => r.id === roomId);
  
      if (!room) {
        console.log(`Meeting room with ID ${roomId} not found.`);
        return false;
      }
  
      const { timeSlot } = meeting;
      const isAvailable = this.isTimeSlotAvailable(room.schedule, timeSlot);
  
      if (isAvailable) {
        room.schedule.push(timeSlot);
        this.notifyParticipants(meeting);
        return true;
      }
  
      console.log(
        `Time slot ${timeSlot.start}-${timeSlot.end} in ${room.name} is not available.`
      );
      return false;
    }
  
    isTimeSlotAvailable(schedule: TimeSlot[], timeSlot: TimeSlot): boolean {
      for (const slot of schedule) {
        if (
          (timeSlot.start >= slot.start && timeSlot.start < slot.end) ||
          (timeSlot.end > slot.start && timeSlot.end <= slot.end) ||
          (timeSlot.start <= slot.start && timeSlot.end >= slot.end)
        ) {
          return false;
        }
      }
      return true;
    }
  
    notifyParticipants(meeting: Meeting): void {
      const { title, participants } = meeting;
      console.log(
        `Meeting "${title}" scheduled. Notifying participants: ${participants.join(
          ', '
        )}`
      );
      // Code to send notifications to participants (e.g., via email, notifications, etc.)
    }
  }
  
  // Example usage
  const scheduler = new MeetingScheduler();
  
  const newMeeting: Meeting = {
    title: 'Team Meeting',
    timeSlot: { start: 10, end: 11 },
    participants: ['participant1@example.com', 'participant2@example.com'],
  };
  
  scheduler.scheduleMeeting(newMeeting, 1); // Schedule a meeting in Meeting Room 1
  