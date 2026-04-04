import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../data/constants';
import { VideoData, KickStream, TwitterData } from '../types';

export function useLastVideos() {
  const [data, setData] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/last`)
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
    fetch(`${API_BASE_URL}/liveD`)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const liveStreams = Object.values(data).filter((stream: KickStream) => stream.live);
  const sortedLiveStreams = [...liveStreams].sort((a: KickStream, b: KickStream) => b.viewers - a.viewers);

  return { data, sortedLiveStreams, loading, error };
}

export function useTwitterData() {
  const [data, setData] = useState<TwitterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/powr`)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
