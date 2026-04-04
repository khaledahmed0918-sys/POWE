import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../data/constants';
import { VideoData, KickStream, TwitterData } from '../types';

export function useLastVideos() {
  const [data, setData] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/last`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

export function useLiveStreams() {
  const [data, setData] = useState<Record<string, KickStream>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/liveD`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const allStreams = Object.values(data);
  const sortedAllStreams = [...allStreams].sort((a: KickStream, b: KickStream) => {
    if (a.live && !b.live) return -1;
    if (!a.live && b.live) return 1;
    if (a.live && b.live) return b.viewers - a.viewers;
    return 0;
  });

  return { data, sortedLiveStreams: sortedAllStreams, loading, error };
}

export function useTwitterData() {
  const [data, setData] = useState<TwitterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/powr`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
