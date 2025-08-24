export interface TimelineEvent {
    time: string;
    title: string;
    location: string;
    description: string;
    type: string;
}

export interface TimelineItemCardProps {
    event: TimelineEvent;
    isCurrent: boolean;
}

export interface TimelineGroup {
    time: string;
    events: TimelineEvent[];
}

export interface TimelineGroupProps {
    group: TimelineGroup;
    currentTime: Date;
}

export interface TimelineLocationProps {
    title: string;
    schedule: TimelineGroup[];
    currentTime: Date;
}
