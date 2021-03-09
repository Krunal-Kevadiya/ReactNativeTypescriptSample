import { ErrorAlertHolder } from '@components';
import type { CreateProfileModel } from '@models';
import { useCallback, useState } from 'react';
import type { Options } from 'react-native-image-crop-picker';
import CropImagePicker from 'react-native-image-crop-picker';

function getFileNameWithExtension(url: string): string {
  return url.substring(url.lastIndexOf('/') + 1, url.length);
}

export function useImageSelection(isAttachment: boolean): [CreateProfileModel | null, () => void, () => void] {
  const options: Options = {
    width: isAttachment ? 1500 : 500,
    height: isAttachment ? 1500 : 500,
    mediaType: 'photo',
    forceJpg: true,
    cropping: !isAttachment,
    multiple: false,
    includeBase64: true
  };
  const [source, setSource] = useState<CreateProfileModel | null>(null);

  const handleTakePhoto = useCallback(() => {
    CropImagePicker.openCamera(options)
      .then((image) => {
        setSource({
          source: image.path,
          data: image.data,
          fileName: getFileNameWithExtension(image.path)
        });
      })
      .catch((error) => {
        ErrorAlertHolder.alertMessage(error.message);
      });
  }, []);

  const handleChooseLibrary = useCallback(() => {
    CropImagePicker.openPicker(options)
      .then((image) => {
        setSource({
          source: image.path,
          data: image.data,
          fileName: getFileNameWithExtension(image.path)
        });
      })
      .catch((error) => {
        ErrorAlertHolder.alertMessage(error.message);
      });
  }, []);

  return [source, handleTakePhoto, handleChooseLibrary];
}
