export function handleShift(shift) {
    if(shift === 'm0') return '9:30 de la mañana';
    if(shift === 'm1') return '10:00 de la mañana';
    if(shift === 'm2') return '10:30 de la mañana';
    if(shift === 'm3') return '11:00 de la mañana';
    if(shift === 'm4') return '11:30 de la mañana';
    if(shift === 'm5') return '12:00 de la tarde';
    if(shift === 'm6') return '12:30 de la tarde';
    if(shift === 'm7') return '13:00 de la tarde';
    if(shift === 'm8') return '13:30 de la tarde';
    if(shift === 'm9') return '14:00 de la tarde';
    if(shift === 't0') return '16:00 de la tarde';
    if(shift === 't1') return '16:30 de la tarde';
    if(shift === 't2') return '17:00 de la tarde';
    if(shift === 't3') return '17:30 de la tarde';
    if(shift === 't4') return '18:00 de la tarde';
    if(shift === 't5') return '18:30 de la tarde';
    if(shift === 't6') return '19:00 de la tarde';
    if(shift === 't7') return '19:30 de la tarde';

    return 'Failed to handle shift';
}