import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

interface MyProps {
  onPhotosSelected: (urls: string[]) => void;
}

const IMAGE_SIZE = (Dimensions.get('screen').width - 32) / 4 - 4;
const PhotoItem: React.FC<MyProps> = props => {
  const {onPhotosSelected} = props;
  const {theme} = useStore();
  const [images, setImages] = useState([]);

  useEffect(() => {
    onPhotosSelected(images);
    return function () {};
  }, [images]);

  const onMorePhotosPress = async () => {
    if (images.length == 4) {
    } else {
      let result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
      });
      let assets = [...(result.assets || [])];
      if (assets.length == 1) {
        let _images = [...images];
        _images.push(assets[0].uri);
        setImages(_images);
      }
    }
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.views}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('@src/assets/editor/photo.png')}
            style={{height: rpx(18), width: rpx(18), tintColor: theme}}
          />
          <View style={{width: 6}} />
          <Text style={{fontSize: 16, color: theme}}>相册</Text>
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          activeOpacity={0.88}
          hitSlop={{top: 12, bottom: 12}}
          onPress={onMorePhotosPress}>
          <Text style={{color: '#666', fontSize: 14}}>{`点击上传（${
            images.length == 0 ? '选填' : `已上传${images.length}/4张`
          }）`}</Text>
          <Image
            source={require('@src/assets/common/row_more_horizontal.png')}
            style={{height: rpx(18), width: rpx(18), tintColor: '#999'}}
          />
        </TouchableOpacity>
      </View>
      {images.length > 0 ? (
        <View style={styles.viewImages}>
          {images.concat(Array(4 - images.length).fill('')).map((it, i) =>
            it ? (
              <View
                style={{
                  position: 'relative',
                  width: (Dimensions.get('screen').width - 24) / 4,
                }}
                key={i}>
                <Image
                  source={{uri: it}}
                  style={{
                    height: IMAGE_SIZE,
                    width: IMAGE_SIZE,
                    borderRadius: 12,
                  }}
                />
                <View style={styles.viewImageCover} />
                <TouchableOpacity
                  style={{position: 'absolute', bottom: 12, right: 12}}
                  hitSlop={{bottom: 12, top: 12, left: 12, right: 12}}
                  activeOpacity={0.88}
                  onPress={() => {
                    let _images = [...images];
                    _images.splice(i, 1);
                    setImages(_images);
                  }}>
                  <Image
                    style={{height: 16, width: 16, tintColor: 'white'}}
                    source={require('@src/assets/editor/delete.png')}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View
                key={i}
                style={{width: (Dimensions.get('screen').width - 24) / 4}}
              />
            ),
          )}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    paddingHorizontal: 12,
    height: rpx(48),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  viewImages: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 12,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  viewImageCover: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    position: 'absolute',
    borderRadius: 12,
  },
});

export default PhotoItem;
