#!/bin/bash

# Function to resize and compress a video
resize_and_compress_video() {
  input_file="$1"
  output_file="$2"
  target_width="$3"
  target_height="$4"
  crf_value="$5"

  ffmpeg -i "$input_file" -vf "scale=$target_width:$target_height" -c:v libx264 -preset slow -crf "$crf_value" -c:a copy "$output_file"
}

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null
then
  echo "FFmpeg is not installed. Please install FFmpeg and try again."
  exit 1
fi

# Set the target width, height, and CRF value
target_width=640
target_height=360
crf_value=23

# Set the input and output directories
input_directory="../../../static/fab9"
output_directory="../../../static/fab9"

# Create the output directory if it doesn't exist
mkdir -p "$output_directory"

# Loop through all video files in the input directory
for input_file in "$input_directory"/*.{mp4,avi,mov}; do
  # Check if the file exists
  if [ -e "$input_file" ]; then
    # Generate the output file name
    filename=$(basename "$input_file")
    output_file="$output_directory/${filename%.*}.mp4"

    # Resize and compress the video
    resize_and_compress_video "$input_file" "$output_file" "$target_width" "$target_height" "$crf_value"

    echo "Compressed $input_file -> $output_file"
  fi
done

