/*
 * Copyright (C) 2020-2022 Sandip Vaghela
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Unsplash {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at: Date
  width: number
  height: number
  color: string
  description: null
  alt_description: string
  urls: Urls
  links: UnsplashLinks
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: null
  user: User
  exif: Exif
  location: Location
  views: number
  downloads: number
}

export interface Exif {
  make: string
  model: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

export interface UnsplashLinks {
  self: string
  html: string
  download: string
  download_location: string
}

export interface Location {
  title: null
  name: null
  city: null
  country: null
  position: Position
}

export interface Position {
  latitude: null
  longitude: null
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface User {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: string
  portfolio_url: string
  bio: null
  location: string
  links: UserLinks
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
}

export interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}
