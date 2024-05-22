import React from 'react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timer from '../components/Timer.tsx';
/*
potential tests:
1. a <Timer/> component is created
2. ...
*/
describe('the first set of basic timer tests', () => {
  it('A Timer Component is created', () => {
    const component = render(<Timer second={10} callbackFunction={() => {}} />);
    expect(component).toBeDefined();
    screen.debug();
  });
});

describe('purchasing flow', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('displays time correctly', () => {
    // set hour within business hours
    render(<Timer second={10} callbackFunction={() => {}} />);
    expect(screen.getByText('Timer: 00:00:00:10')).toBeInTheDocument();
  });
  it('decrements seconds correctly', async () => {
    render(<Timer second={10} callbackFunction={() => {}} />);
    vi.advanceTimersByTime(1000);

    expect(screen.getByText('Timer: 00:00:00:09')).toBeInTheDocument();
  });
  it('changes from minutes to seconds correctly', async () => {
    render(<Timer second={60} callbackFunction={() => {}} />);
    expect(screen.getByText('Timer: 00:00:01:00')).toBeInTheDocument();
    vi.advanceTimersByTime(1000);

    expect(screen.getByText('Timer: 00:00:00:59')).toBeInTheDocument();
  });
});
