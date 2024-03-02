import shutil
import os

def backup_files(source_dir, dest_dir):
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
    
    for root, dirs, files in os.walk(source_dir):
        for file in files:
            source_file_path = os.path.join(root, file)
            dest_file_path = os.path.join(dest_dir, file)
            shutil.copy2(source_file_path, dest_file_path)

if __name__ == "__main__":
    source_dir = "source_directory"
    dest_dir = "backup_directory"
    backup_files(source_dir, dest_dir)
