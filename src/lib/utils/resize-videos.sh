#!/bin/bash

# Function to resize and compress a video while maintaining aspect ratio
resize_and_compress_video() {
  input_file="$1"
  output_file="$2"
  target_dimension="$3"
  crf_value="$4"

  # Get the video's original width and height
  original_width=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$input_file")
  original_height=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of default=noprint_wrappers=1:nokey=1 "$input_file")

  # Calculate the aspect ratio
  aspect_ratio=$(awk "BEGIN {print $original_width / $original_height}")

  # Calculate the target width and height based on the target dimension
  if (( $(echo "$original_width > $original_height" | bc -l) )); then
    target_width=$target_dimension
    target_height=$(awk "BEGIN {print int($target_width / $aspect_ratio)}")
  else
    target_height=$target_dimension
    target_width=$(awk "BEGIN {print int($target_height * $aspect_ratio)}")
  fi

  # Ensure target width and height are even numbers
  target_width=$((target_width & ~1))
  target_height=$((target_height & ~1))

  ffmpeg -i "$input_file" -vf "scale=$target_width:$target_height" -c:v libx264 -preset slow -crf "$crf_value" -an "$output_file"
}

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null
then
  echo "FFmpeg is not installed. Please install FFmpeg and try again."
  exit 1
fi

# Check if FFprobe is installed
if ! command -v ffprobe &> /dev/null
then
  echo "FFprobe is not installed. Please install FFprobe and try again."
  exit 1
fi

# Set the target dimension (width or height) and CRF value
target_dimension=640
crf_value=23

# Set the input and output directories
input_directory="../../../static"
output_directory="../../../static/fab0"

# Create the output directory if it doesn't exist
mkdir -p "$output_directory"

# Loop through all video files in the input directory
for input_file in "$input_directory"/*.{mp4,avi,mov}; do
  # Check if the file exists
  if [ -e "$input_file" ]; then
    # Generate the output file name
    filename=$(basename "$input_file")
    output_file="$output_directory/${filename%.*}r.mp4"

    # Resize and compress the video while maintaining aspect ratio
    resize_and_compress_video "$input_file" "$output_file" "$target_dimension" "$crf_value"

    echo "Compressed $input_file -> $output_file"
  fi
done
