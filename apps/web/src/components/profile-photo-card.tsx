import Image from "next/image";

export function ProfilePhotoCard() {
  return (
    <div className="photo-card reveal">
      <Image
        src="/profile/profile.jpg"
        alt="Kittipit profile"
        width={420}
        height={560}
        className="profile-image"
        priority
      />
    </div>
  );
}
