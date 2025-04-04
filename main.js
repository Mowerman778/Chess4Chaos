// JavaScript code from previous example starts here
const teams = {
    NORTH: { color: 'red', symbol: '♔', quadrant: 'north' },
    SOUTH: { color: 'black', symbol: '♚', quadrant: 'south' },
    EAST: { color: 'blue', symbol: '♚', quadrant: 'east' },
    WEST: { color: 'white', symbol: '♔', quadrant: 'west' }
};

const pieceTypes = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];

function createBoard() {
    const board = document.getElementById('board');
    for(let row = 0; row < 12; row++) {
        for(let col = 0; col < 12; col++) {
            const cell = document.createElement('div');
            cell.className = `cell ${getQuadrant(row, col)}`;
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            if(row === 0 || row === 1) setupNorthPieces(cell, row, col);
            if(row === 10 || row === 11) setupSouthPieces(cell, row, col);
            if(col === 0 || col === 1) setupWestPieces(cell, row, col);
            if(col === 10 || col === 11) setupEastPieces(cell, row, col);

            cell.addEventListener('click', handleClick);
            board.appendChild(cell);
        }
    }
}

// ... rest of the JavaScript code from previous example ...